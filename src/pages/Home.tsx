import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);

	function handleAddTask(newTaskTitle: string) {
		//TODO - add new task
		const newTask: Task = {
			id: new Date().getTime(),
			title: newTaskTitle,
			done: false,
		};

		setTasks(prevTasks => [...prevTasks, newTask]);
	}

	function handleToggleTaskDone(id_: number) {
		//TODO - toggle task done if exists
		const newTasks = [...tasks];
		const oldTaskIndex = tasks.findIndex(({ id }) => id === id_);

		if (oldTaskIndex !== -1) {
			const newTask: Task = {
				title: tasks[oldTaskIndex].title,
				done: !tasks[oldTaskIndex].done,
				id: id_,
			};

			newTasks[oldTaskIndex] = newTask;

			setTasks(newTasks);
		}
	}

	function handleRemoveTask(id_: number) {
		//TODO - remove task from state
		const newTasks = tasks.filter(({ id }) => id !== id_);
		setTasks(newTasks);
	}

	return (
		<View style={styles.container}>
			<Header tasksCounter={tasks.length} />

			<TodoInput addTask={handleAddTask} />

			<TasksList
				tasks={tasks}
				toggleTaskDone={handleToggleTaskDone}
				removeTask={handleRemoveTask}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EBEBEB",
	},
});
