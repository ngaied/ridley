let keyFields = [
  'Company / Supplier'
];

let commonFields = [
  'Materials',
  'Product Code',
  'Country Of Origin',
  'SANIPES Website',
  'Company Website',
  'Company Certificates'
]

let fieldMap = {
  'Company / Supplier' : 'company',
  'Materials' : 'materials',
  'Product Code' : 'productCode',
  'Country Of Origin' : 'countryOfOrigin',
  'SANIPES Website' : 'sanipesWebsite',
  'Company Website' : 'companyWebsite',
  'Company Certificates' : 'companyCertificate',
  
  // Site specific
  'Supplier site' : 'siteName',
  'Gov\'t Managed' : 'govtManaged',
  'IFFO / MSC / ASC / RTRS' : 'certType',
  'MSC/IFFO/ASC/RTRS Expiry Dates' : 'certExpiry',
  'Link (IFFO/MSC/ASC/RTRS websites)' : 'certLink',  
  'Fish Species' : 'fishSpecies',
  'Species Certification' : 'speciesCertification',
  'IUCN status' : 'iucnStatus',
  'Ridley Species Certificate Supplied' : 'certificatSupplied',
  'Ridley RS Audit Record Supplied' : 'auditRecordSupplied',
  'QMS' : 'qms',
  'FAO area / CCAMLR area' : 'faoArea',
  'FAO Description of Location' : 'faoDesc',
  'FAO Link' : 'faoLink',
  'Catching Method' : 'catchMethod',
  
  // Fish score
  'Is the management strategy precautionary?' : 'fishScore1',
  'Do managers follow scientific advice?'     : 'fishScore2',
  'Do fishers comply?'                        : 'fishScore3',
  'Is the fish stock healthy?'                : 'fishScore4',
  'Will the fish stock be healthy in future?' : 'fishScore5',
  'FishSource Score Link'                     : 'fishScoreLink',
  'Fishbase data'                             : 'fishbaseData'
};

let linkFields = [
  'sanipesWebsite',
  'companyWebsite',
  'certLink',
  'faoLink',
  'fishScoreLink',
  'fishbaseData',
];

let fishScoreFields = [
  'fishScore1',
  'fishScore2',
  'fishScore3',
  'fishScore4',
  'fishScore5'
];

let extraCerts = [
  'IFFO RS (CoC)',
  'FAO Code of Conduct for Responsible Fisheries',
  'BAP',
  'BASC (Business Alliance for Secure Commerce)',
  'CCAMLR Commission for the Conservation of Antarctic Marine Living Resources',
  'MSC Chain of Custody documents',
  'Debio (organic)',
  'Dolphin Safe',
  'FEMAS',
  'Friends of the Sea',
  'GMP',
  'HACCP',
  'ISO 14000',
  'ISO 9001:2008',
  'ISO 18001:2007',
  'ISO 22000:2005',
  'Naturland',
  'NOFIMA',
  'WWF'
];

let extraInfo1 = [
  "Species are advised on shipping paperwork",
  "CoA's provided with each shipment",
  "CoA's are from 3rd party testing",
  "Antioxidant added",
  "IUCN declaration",
  "IUU declaration",
  "Declaration stating exclusion of slave/child labour/contravene of human rights",
  "Does the supplier have 3rd party verification of compliance to human rights declaration",
  "Manufacturers Declaration statements required for export to NZ in shipping docs",
  "Import statements are in shipping docs",
  "Ruminant statement requirements are in shipping docs",
  "By product/Trimmings of processing",
  "Percentage of By product/Trimmings",
  "Farmed material",
  "Salmonella Testing stated",
  "Shigella testing stated",
  "BSE Free Certificate",
  "If materials are treated with chemicals or pesticides this is noted in paperwork"
];

let extraInfo2 = [
  "Evidence of traceability back to fishery/vessels",
  "Product Specifications supplied",
  "Pre-shipment samples sent to Ridley",
  "Batch samples arrive with goods",
  "<1 NCR in 12 months related to products",
  "<1 NCR in 12 months related to delivery",
  "<1 DAWR Issue in previous 12 months customs/import"
];
  
export const SupplierUtils =
{
  createSupplier : () => {
    return {
      'company'            : '',
      'materials'          : '',
      'productCode'        : '',
      'countryOfOrigin'    : '',
      'sanipesWebsite'     : {text : '', url : ''},
      'companyWebsite'     : {text : '', url : ''},
      'companyCertificate' : '',
      'sites' : []
    };
  },
  
  createSite : (name) => {
    return {
      'siteName'             : name,
      'govtManaged'          : false,
      'certType'             : 'None',
      'certExpiry'           : '',
      'certLink'             : {text : '', url : ''},
      'linkUrl'              : '',
      'fishSpecies'          : '',
      'speciesCertification' : '',
      'iucnStatus'           : '',
      'certificatSupplied'   : '',
      'auditRecordSupplied'  : '',
      'qms'                  : '',
      'faoArea'              : '',
      'faoDesc'              : '',
      'faoLink'              : {text : '', url : ''},
      'catchMethod'          : '',
      'fishScore1'           : {'cmp' : 'eq', 'score' : ''},
      'fishScore2'           : {'cmp' : 'eq', 'score' : ''},
      'fishScore3'           : {'cmp' : 'eq', 'score' : ''},
      'fishScore4'           : {'cmp' : 'eq', 'score' : ''},
      'fishScore5'           : {'cmp' : 'eq', 'score' : ''},
      'fishScoreLink'        : {text : '', url : ''},
      'fishbaseData'         : {text : '', url : ''},
      'extraCerts'           : [],
      'extraData1'           : [],
      'extraData2'           : []
    };
  },
  
  isKeyField : (field) => {
    return (keyFields.indexOf(field) > -1);
  },
  
  isCommonField : (field) => {
    return (commonFields.indexOf(field) > -1);
  },
  
  isLinkField : (field) => {
    return (linkFields.indexOf(field) > -1);
  },
  
  isFishScoreField : (field) => {
    return (fishScoreFields.indexOf(field) > -1);
  },
  
  extraCertIdx : (cert) => {
    return extraCerts.indexOf(cert);
  },
  
  extraData1Idx : (data) => {
    return extraInfo1.indexOf(data);
  },
  
  extraData2Idx : (data) => {
    return extraInfo2.indexOf(data);
  },
  
  getExtraCert : (idx) => {
    return extraCerts[idx];
  },
  
  getExtraData1Criterion : (idx) => {
    return extraInfo1[idx];
  },
  
  getExtraData2Criterion : (idx) => {
    return extraInfo2[idx];
  },
    
  labelToField : (label) => {
    return fieldMap[label];
  },
  
  parseFishScore : (text) => {
    if (typeof text === 'string')
    {
      let value = text.match(/\d+(\.\d+)?/g);
      if (value.length === 0) {
        return null;
      }
      else {
        let score = value[0]
        if (score.length !== text.length) {
          return {
            'cmp'   : text.substring(0, text.length - score.length),
            'score' : parseInt(score)
          };
        }
        else {
          return {'cmp' : '=', 'score' : parseInt(score)};
        }
      }
    }
    else {
      return {'cmp' : '=', 'score' : text};
    }
  },
  
  parseLink : (field, text) => {
    var values = text.split("\r\n");
    if (values.length === 1) {
      return text;
    }
    else {
      let fieldUrl = field + "Url";
      let linkObj  = {};
      linkObj[field]    = values[0];
      linkObj[fieldUrl] = values[1];
      return linkObj;
    }
  }
}