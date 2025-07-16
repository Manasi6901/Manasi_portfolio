import json
import os
import time
from datetime import datetime, timedelta

TASKS_FILE = 'tasks.json'

def load_tasks():
    if not os.path.exists(TASKS_FILE):
        return []
    with open(TASKS_FILE, 'r') as f:
        return json.load(f)

def save_tasks(tasks):
    with open(TASKS_FILE, 'w') as f:
        json.dump(tasks, f, indent=2)

def format_time(seconds):
    return str(timedelta(seconds=int(seconds)))

def list_tasks(tasks):
    if not tasks:
        print('No tasks found.')
        return
    print(f"{'ID':<4} {'Name':<20} {'Status':<8} {'Time Spent':<12} Tracking")
    for t in tasks:
        tracking = 'Yes' if t.get('currently_tracking') else 'No'
        print(f"{t['id']:<4} {t['name']:<20} {('Done' if t['done'] else 'Undone'):<8} {format_time(t['total_time']):<12} {tracking}")

def add_task(tasks, name):
    task_id = max([t['id'] for t in tasks], default=0) + 1
    tasks.append({
        'id': task_id,
        'name': name,
        'done': False,
        'total_time': 0,
        'currently_tracking': False,
        'last_start_time': None
    })
    save_tasks(tasks)
    print(f"Task '{name}' added with ID {task_id}.")

def find_task(tasks, task_id):
    for t in tasks:
        if t['id'] == task_id:
            return t
    return None

def start_task(tasks, task_id):
    task = find_task(tasks, task_id)
    if not task:
        print('Task not found.')
        return
    if task['currently_tracking']:
        print('Task is already being tracked.')
        return
    task['currently_tracking'] = True
    task['last_start_time'] = time.time()
    save_tasks(tasks)
    print(f"Started tracking time for task '{task['name']}'.")

def stop_task(tasks, task_id):
    task = find_task(tasks, task_id)
    if not task:
        print('Task not found.')
        return
    if not task['currently_tracking']:
        print('Task is not being tracked.')
        return
    elapsed = time.time() - task['last_start_time']
    task['total_time'] += elapsed
    task['currently_tracking'] = False
    task['last_start_time'] = None
    save_tasks(tasks)
    print(f"Stopped tracking time for task '{task['name']}'. Added {format_time(elapsed)}.")

def mark_done(tasks, task_id, done=True):
    task = find_task(tasks, task_id)
    if not task:
        print('Task not found.')
        return
    task['done'] = done
    save_tasks(tasks)
    print(f"Task '{task['name']}' marked as {'done' if done else 'undone'}.")

def main():
    tasks = load_tasks()
    while True:
        print('\nCommands: list, add <name>, start <id>, stop <id>, done <id>, undone <id>, quit')
        cmd = input('> ').strip()
        if cmd == 'list':
            list_tasks(tasks)
        elif cmd.startswith('add '):
            name = cmd[4:].strip()
            if name:
                add_task(tasks, name)
                tasks = load_tasks()
            else:
                print('Task name required.')
        elif cmd.startswith('start '):
            try:
                task_id = int(cmd.split()[1])
                start_task(tasks, task_id)
                tasks = load_tasks()
            except:
                print('Invalid task ID.')
        elif cmd.startswith('stop '):
            try:
                task_id = int(cmd.split()[1])
                stop_task(tasks, task_id)
                tasks = load_tasks()
            except:
                print('Invalid task ID.')
        elif cmd.startswith('done '):
            try:
                task_id = int(cmd.split()[1])
                mark_done(tasks, task_id, True)
                tasks = load_tasks()
            except:
                print('Invalid task ID.')
        elif cmd.startswith('undone '):
            try:
                task_id = int(cmd.split()[1])
                mark_done(tasks, task_id, False)
                tasks = load_tasks()
            except:
                print('Invalid task ID.')
        elif cmd == 'quit':
            print('Goodbye!')
            break
        else:
            print('Unknown command.')

if __name__ == '__main__':
    main()