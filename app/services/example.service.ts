import {ExampleModel} from '../models/example.model';
import {ExampleDal} from '../dals/example.dal';

export class ExampleService {
	getClinvarInfoExample(arg0: number) {
		return {
			tepology: 'NM_007294.4(BRCA1):c.3257del (p.Arg1085_Leu1086insTer)',
			Interpretation:'Pathogenic',
			Review_status:'3 stars',
			Submissions:'3',
			Last_evaluated:'Dec 15, 2017',
			Accession:'VCV000252873.4',
			Variation_ID:'252873',
			Description:'1bp deletion'
		}
	}

	getEvidenceInfoExample(arg0: number) {
		return {
			"1":{
			Interpretation:'Pathogenic',
			Review_status:'reviewed by expert panel',
			Condition:'Breast-ovarian cancer, familial 1',
			Submitter:'Evidence-based Network for the Interpretation of Germline Mutant Alleles (ENIGMA)',
			Supporting_information:'Evidence details'
		},
		"2":{
			Interpretation:'Pathogenic',
			Review_status:'criteria provided, single submitter',
			Condition:'Hereditary breast and ovarian cancer syndrome',
			Submitter:'Invitae',
			Supporting_information:'Evidence detailsPublications'
		},
		"3":{
			Interpretation:'Pathogenic',
			Review_status:'criteria provided, single submitter',
			Condition:'Hereditary breast and ovarian cancer syndrome',
			Submitter:'Invitae',
			Supporting_information:'Evidence detailsPublications'
		},
		"4":{
			Interpretation:'Pathogenic',
			Review_status:'criteria provided, single submitter',
			Condition:'Hereditary breast and ovarian cancer syndrome',
			Submitter:'Invitae',
			Supporting_information:'Evidence detailsPublications'
		},
		"5":{
			Interpretation:'Pathogenic',
			Review_status:'criteria provided, single submitter',
			Condition:'Hereditary breast and ovarian cancer syndrome',
			Submitter:'Invitae',
			Supporting_information:'Evidence detailsPublications'
		},
		"6":{
			Interpretation:'Pathogenic',
			Review_status:'criteria provided, single submitter',
			Condition:'Hereditary breast and ovarian cancer syndrome',
			Submitter:'Invitae',
			Supporting_information:'Evidence detailsPublications'
		},
	}
	}

	private exampleDal: ExampleDal;

	constructor(exampleDal: ExampleDal) {
		this.exampleDal = exampleDal;
	}

	getExampleById(id: number): ExampleModel {
		return this.exampleDal.getExampleById(id);
	}

}
