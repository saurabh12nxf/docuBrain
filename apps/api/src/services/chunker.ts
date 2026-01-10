import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
export class TextChunker {
  private splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  async chunkDocument(text: string, metadata: any) {
    const chunks = await this.splitter.createDocuments([text], [metadata]);
    return chunks;
  }
}