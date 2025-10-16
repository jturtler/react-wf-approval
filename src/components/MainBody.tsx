import { Location, Period } from "../App"
import Selectors from "./Selectors"

const MainBody = ({periodList, locationList}: {periodList:Period[], locationList:Location[]}) => {

	return (
		<main>
			<Selectors periodList={periodList} locationList={locationList} />
			<div className="p-2 ml-2">
				Main body
			</div>
		</main>
	)
}

export default MainBody
