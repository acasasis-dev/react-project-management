import NewProjectInputProps from "../interfaces/NewProjectInputProps";

export default function NewProjectInput({label, isTextArea, ...props}: NewProjectInputProps) {
	return (
		<p>
			<label>{label}</label>
			{isTextArea ? <textarea {...props} /> : <input {...props} />}
		</p>
	)
}