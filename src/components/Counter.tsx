import React from "react";
import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { Button, ConfigProvider, Flex } from "antd";

export function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-teal-400 backdrop-contrast-50 w-2/6 p-4 flex justify-between rounded ">
				<Button
					color="primary"
					variant="solid"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</Button>
		
				<span>{count}</span>

				<Button
					color="primary"
					variant="solid"
					onClick={() => dispatch(increment())}
				>
					Increment
				</Button>
			</div>
		</div>
	);
}
