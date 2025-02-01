enum ClientStatus {
	active = "Active",
	pending = "Pending",
	disabled = "Disabled"
}

enum ClientGender {
	male = "Male",
	female = "Female"
}

export interface ClientData {
	id: string;
	firstName: string;
	lastName: string;
	gender: ClientGender;
	status: ClientStatus;
}

export class Client {
	id: string;
	firstName: string;
	lastName: string;
	gender: ClientGender;
	status: ClientStatus;

	constructor(data: ClientData) {
		this.id = data.id;
		this.firstName = data.firstName;
		this.lastName = data.lastName;
		this.gender = data.gender;
		this.status = data.status;
	}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}