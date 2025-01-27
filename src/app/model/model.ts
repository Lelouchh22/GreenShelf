// export interface Root {
//   kind: string
//   totalItems: number
//   items: Book[]
// }

// export interface Book {
//   kind: string
//   id: string
//   etag: string
//   selfLink: string
//   volumeInfo: volumeInfo
//   saleInfo: SaleInfo
//   accessInfo: AccessInfo
//   searchInfo: SearchInfo
// }

// export interface volumeInfo {
//   title: string
//   authors: string[]
//   publisher: string
//   publishedDate: string
//   description: string
//   industryIdentifiers: IndustryIdentifier[]
//   readingModes: ReadingModes
//   pageCount: number
//   printType: string
//   categories: string[]
//   maturityRating: string
//   allowAnonLogging: boolean
//   contentVersion: string
//   panelizationSummary: PanelizationSummary
//   imageLinks: ImageLinks
//   language: string
//   previewLink: string
//   infoLink: string
//   canonicalVolumeLink: string
//   subtitle?: string
//   averageRating?: number
//   ratingsCount?: number
// }

// export interface IndustryIdentifier {
//   type: string
//   identifier: string
// }

// export interface ReadingModes {
//   text: boolean
//   image: boolean
// }

// export interface PanelizationSummary {
//   containsEpubBubbles: boolean
//   containsImageBubbles: boolean
// }

// export interface ImageLinks {
//   smallThumbnail: string
//   thumbnail: string
// }

// export interface SaleInfo {
//   country: string
//   saleability: string
//   isEbook: boolean
//   listPrice?: ListPrice
//   retailPrice?: RetailPrice
//   buyLink?: string
//   offers?: Offer[]
// }

// export interface ListPrice {
//   amount: number
//   currencyCode: string
// }

// export interface RetailPrice {
//   amount: number
//   currencyCode: string
// }

// export interface Offer {
//   finskyOfferType: number
//   listPrice: ListPrice2
//   retailPrice: RetailPrice2
// }

// export interface ListPrice2 {
//   amountInMicros: number
//   currencyCode: string
// }

// export interface RetailPrice2 {
//   amountInMicros: number
//   currencyCode: string
// }

// export interface AccessInfo {
//   country: string
//   viewability: string
//   embeddable: boolean
//   publicDomain: boolean
//   textToSpeechPermission: string
//   epub: Epub
//   pdf: Pdf
//   webReaderLink: string
//   accessViewStatus: string
//   quoteSharingAllowed: boolean
// }

// export interface Epub {
//   isAvailable: boolean
//   acsTokenLink?: string
// }

// export interface Pdf {
//   isAvailable: boolean
//   acsTokenLink: string
// }

// export interface SearchInfo {
//   textSnippet: string
// }



export interface Root {
  page: number
  numFound: number
  reading_log_entries: Book[]
}

export interface Book {
  work: Work
  logged_edition?: string
  logged_date: string
}

export interface Work {
  title: string
  key: string
  author_keys: string[]
  author_names: string[]
  first_publish_year: number
  lending_edition_s?: string
  edition_key: string[]
  cover_id?: number
  cover_edition_key?: string
  description: string
}
