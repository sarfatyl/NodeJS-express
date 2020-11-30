/**
 * The Proxy has an interface identical to the RealSubject.
 */
import {Subject} from "./interfaces/subject.interface";
import {RealSubject} from "./realObject";

export class Proxy implements Subject {
	private realSubject: RealSubject;

	/**
	 * The Proxy maintains a reference to an object of the RealSubject class. It
	 * can be either lazy-loaded or passed to the Proxy by the client.
	 */
	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	/**
	 * The most common applications of the Proxy pattern are lazy loading,
	 * caching, controlling the access, logging, etc. A Proxy can perform one of
	 * these things and then, depending on the result, pass the execution to the
	 * same method in a linked RealSubject object.
	 */
	public request(): void {
		if (this.checkAccess()) {
			this.realSubject.request();
			this.logAccess();
		}
	}

	private checkAccess(): boolean {
		// Some real checks should go here.
		console.log('Proxy: Checking access prior to firing a real request.');

		return true;
	}

	private logAccess(): void {
		console.log('Proxy: Logging the time of request.');
	}
}
