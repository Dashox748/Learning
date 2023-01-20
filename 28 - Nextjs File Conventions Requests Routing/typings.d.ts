export type Todos = {
  userId: number;
  id: nubmer;
  title: string;
  completed: boolean;
};

export type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      snippet: string;
      snippet_highlighted_words: any;
      about_this_result: any;
      cached_page_link: string;
    }
  ];
};
