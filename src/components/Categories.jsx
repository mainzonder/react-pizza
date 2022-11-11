import React from "react";

const Categories = React.memo(function Categories({items, onClickItem}) {
	const [activeItem, setActiveItem] = React.useState(null);

	const onSelectItem = (index) => {
		setActiveItem(index);
		onClickItem(index);
	};

	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onSelectItem(null)}
					className={activeItem === null ? "active" : ""}>
					Все
				</li>

				{items &&
					items.map((name, index) => (
						<li
							className={activeItem === index ? "active" : ""}
							onClick={(even) => onSelectItem(index)}
							key={`${name}_${index}`}>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
});

export default Categories;
