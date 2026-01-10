import axios from 'axios';
import * as cheerio from 'cheerio';
import { Octokit } from '@octokit/rest';
export class DocumentScraper {
  async scrapeGitHub(repoUrl: string) {
    // Extract owner/repo from URL
    // Use Octokit to fetch README, docs folder
    // Return raw markdown/text
  }
  
  async scrapeWebsite(url: string) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    // Extract text from HTML
    return $('body').text();
  }
}