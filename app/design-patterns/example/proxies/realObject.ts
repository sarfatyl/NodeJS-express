import {Subject} from "./interfaces/subject.interface";


export class RealSubject implements Subject {
	public request(): void {
		console.log('RealSubject: Handling request.');
	}
}
