import { useAppContext } from "../context/AppContext"
import { useAppSelector } from "../redux/hooks"

const Selectors = () => {
	const { periods } = useAppContext();
	const locations = useAppSelector(state => state.location.locations);

	return (
		<div className="bg-white shadow-sm p-2 flex flex-wrap items-center gap-4">
			<div className="flex gap-2 w-full flex-wrap">
				<div>
					<label className="">Period</label>
					<select className="border p-1 rounded w-40 ml-1" data-testid="select-period" >
						<option value="" disabled>Select a Period</option>
						{periods.map(period => (
							<option key={period.id} value={period.id}>{period.name}</option>
						))}
					</select>
				</div>

				<div>
					<label className="">Location</label>
					<select className="border p-1 rounded w-40 ml-1" data-testid="select-location" >
						<option value="" disabled>Select a Location</option>
						{locations.map(location => (
							<option key={location.id} value={location.id}>{location.name}</option>
						))}
					</select>
				</div>

			</div>

		</div>
	)
}

export default Selectors
