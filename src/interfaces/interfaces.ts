export interface IapiResponse {
	status: number;
	data?: Idoc[];
	error?: string;
}

export interface Idoc {
	id: string;
	date: string;
	name: string;
	info: string;
}

export interface IuseInput {
	value: string;
	onChange: Function;
	isDirty: boolean;
}

export interface IsortParam {
	sortField: string;
	sortType: string;
	handleSortField: Function;
	handleSortType: Function;
}

export interface IsearchProps {
	handlerApiRequest: Function;
	sortParams: {
		sortField: string;
		sortType: string;
		handleSortField: Function;
		handleSortType: Function;
	};
}

export interface IerrorMesagePage {
	error: string;
}

export interface IdocsList {
	docsList: Idoc[] | undefined;
	error: string | undefined;
}
