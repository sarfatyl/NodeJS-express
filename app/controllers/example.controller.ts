import { NextFunction, Request, Response } from 'express-serve-static-core';
import { ResponseStatusCodes } from '../enums/response-status-codes.enum';
import { ExampleDal } from '../dals/example.dal';
import { ExampleService } from '../services/example.service';
import { ExampleModel } from '../models/example.model';
import * as Errors from '../consts/errors.const';
import { ApiRoutes } from '../enums/api-routes.enum';
const pdf = require('pdf-parse'),
	fs = require('fs'),
	PDFParser = require("pdf2json"),
	textract = require('textract')

export class ExampleController {

	private exampleDal: ExampleDal;
	private exampleService: ExampleService;

	constructor(
		exampleDal: ExampleDal,
		exampleService: ExampleService
	) {
		this.exampleDal = exampleDal;
		this.exampleService = exampleService;
	}

	getExample = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			let example = this.exampleService.getEvidenceInfoExample(id);
			res.status(ResponseStatusCodes.Ok).send(example);
			next();
		} catch (error) {
			next(error);
		}
	};
	getClinvarInfoExample = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			let example = this.exampleService.getClinvarInfoExample(id);
			res.status(ResponseStatusCodes.Ok).send(example);
			next();
		} catch (error) {
			next(error);
		}
	};

	getEvidenceInfoExample = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const id: number = +req.params.id;
			let example = this.exampleService.getEvidenceInfoExample(id);
			res.status(ResponseStatusCodes.Ok).send(example);
			next();
		} catch (error) {
			next(error);
		}
	};


	uploadFile = async (req: any, res: Response, next: NextFunction): Promise<void> => {
		try {
			textract.fromBufferWithMime('application/pdf', req.files.file.data, function( error, text ) {
				console.log('error', error);
				console.log('text', text);
				
			})

			// let pdfParser = new PDFParser();
			// pdfParser.on("pdfParser_dataError", (errData) => {
			// 	console.error(errData.parserError)
			// }
			// );
			// pdfParser.on("pdfParser_dataReady", (pdfData) => {
			// 	// for (const word of pdfData.formImage.Pages[0].Texts) {
			// 		// console.log(word.R[0].T);
			// 		// 
			// 	// }
			// 	// const a = pdfParser.getRawTextContent();
			// 	console.log('pdfParser.getRawTextContent()', pdfData);
			// 	// fs.writeFile("./content.txt", pdfParser.getRawTextContent(), () => {});
				
			// });
			// pdfParser.parseBuffer(req.files.file.data);
			// // const response = await pdf(req.files.file.data);
			// // console.log(response.text)
			// // fs.writeFile('test.txt', response.text, () => {

			// // });
			const id: number = +req.params.id;
			let example = this.exampleService.getEvidenceInfoExample(id);
			res.status(ResponseStatusCodes.Ok).send(example);
			next();
		} catch (error) {
			next(error);
		}
	};

}
