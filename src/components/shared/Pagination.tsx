interface IPaginationProps {
	itemsPerPage: number;
	totalItems: number;
	paginate: (page: number) => void;
	currentPage: number;
}

const Pagination = (props: IPaginationProps) => {
	const pageNumbers = [];

	for (
		let i = 1;
		i <= Math.ceil(props.totalItems / props.itemsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="flex flex-wrap justify-center gap-2 ">
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => props.paginate(number)}
							className={`px-4 py-2 border rounded duration-300 ${
								props.currentPage === number
									? "bg-primary-500 text-white"
									: "bg-white text-neutral-700"
							}`}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
