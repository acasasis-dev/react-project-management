import NewProjectInputProps from "../interfaces/NewProjectInputProps"
import NewProjectInput from "./NewProjectInput"

export default function NewProject() {
	const inputs: NewProjectInputProps[] = [
		{label: "Title", isTextArea: false},
		{label: "Description", isTextArea: true},
		{label: "Due Date", isTextArea: false}
	]

	return (
		<div className="w-[35rem] mt-16">
			<menu>
				<li><button>Cancel</button></li>
				<li><button>Save</button></li>
			</menu>
			<div>
				{inputs.map(input => {
					return <NewProjectInput label={input.label} isTextArea={input.isTextArea} />
				})}
			</div>
		</div>
	)
}