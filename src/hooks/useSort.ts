import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const useSort = () => {
	const [sortField, setSortField] = useState<string>("date");
	const [sortType, setSortType] = useState<string>("asc");

	const handleSortField = (e: SelectChangeEvent) => {
		setSortField(e.target.value);
	};
	const handleSortType = (e: SelectChangeEvent) => {
		setSortType(e.target.value);
	};

	return {
		sortField,
		sortType,
		handleSortField,
		handleSortType,
	};
};
