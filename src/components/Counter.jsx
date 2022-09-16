import React, { useState } from "react";

const Counter = function () {
	const [count, func] = useState(0)

	let inc = () => func(count + 1)
	let dec = () => func(count - 1)



	return (
		<div>
			<h1>{count}</h1>
			<button onClick={inc} type="" >+</button>
			<button onClick={dec} type="">-</button>
		</div>
	)
}

export default Counter
