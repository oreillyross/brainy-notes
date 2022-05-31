
type Props = {
	note: {
		title: string,
		description: string,
		url: string,
	}
}

const NoteCard = ({note}: Props) => {
	const {title, description, url } = note;
	return (
		<div>
                  {title}
		  <div className="line-clamp-3"> {description} </div>
		  {url}
		</div>
	)
}

export default NoteCard;