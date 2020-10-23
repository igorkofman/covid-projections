import faq from './learn-faq.json';
import glossary from './learn-glossary.json';
import { sanitizeID } from './utils';

type Markdown = string;

/*
  For FAQ:
*/
export interface Question {
  question: string;
  answer: Markdown;
}

export interface FaqSection {
  sectionTitle: string;
  sectionId: string;
  questions: Question[];
}

export interface FaqContent {
  header: string;
  sections: FaqSection[];
}

function sanitizeSection(section: FaqSection): FaqSection {
  const { sectionId, ...other } = section;
  return {
    sectionId: sanitizeID(sectionId),
    ...other,
  };
}

function sanitizeFaq(faq: FaqContent) {
  const { sections, ...other } = faq;
  return {
    sections: sections.map(sanitizeSection),
    ...other,
  };
}

export const faqContent = sanitizeFaq(faq) as FaqContent;

/*
  For Glossary:
*/

export interface Term {
  term: string;
  termId: string;
  definition: Markdown;
}

export interface GlossaryContent {
  header: string;
  intro: Markdown;
  terms: Term[];
}

// (Chelsi): make these sanitize functions reusable between learn pages?
function sanitizeTerm(term: Term): Term {
  const { termId, ...other } = term;
  return {
    termId: sanitizeID(termId),
    ...other,
  };
}

function sanitizeGlossary(glossary: GlossaryContent) {
  const { terms, ...other } = glossary;
  return {
    terms: terms.map(sanitizeTerm),
    ...other,
  };
}

export const glossaryContent = sanitizeGlossary(glossary) as GlossaryContent;

/*
  For Landing page:
*/

export interface LandingSection {
  sectionTitle: string;
  sectionId: string;
  description: Markdown;
  buttonCta: string;
  buttonRedirect: string;
}

export interface LandingContent {
  header: string;
  sections: LandingSection[];
}
