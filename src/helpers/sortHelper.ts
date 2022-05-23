import { Idoc } from "./../interfaces/interfaces";

export const sortHelper = (docs: Idoc[] | [], field: string, type: string) => {
	switch (type) {
		case "asc":
			if (field === "name") {
				return docs
					.sort((doc1, doc2) => (doc1.name < doc2.name ? 1 : -1))
					.reverse();
			} else {
				return docs.sort((doc1, doc2): any => {
					return new Date(doc1.date) > new Date(doc2.date) ? 1 : -1;
				});
			}
		case "desc":
			if (field === "name") {
				return docs
					.sort((doc1, doc2) => (doc1.name > doc2.name ? 1 : -1))
					.reverse();
			} else {
				return docs.sort((doc1, doc2): any => {
					return new Date(doc1.date) < new Date(doc2.date) ? 1 : -1;
				});
			}
		default:
			return docs;
	}
};
