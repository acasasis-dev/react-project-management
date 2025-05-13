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
			<menu className="flex items-center justify-end gap-4 my-4">
				<li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
				<li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
			</menu>
			<div>
				{inputs.map(input => {
					return <NewProjectInput label={input.label} isTextArea={input.isTextArea} />
				})}
			</div>
		</div>
	)
}