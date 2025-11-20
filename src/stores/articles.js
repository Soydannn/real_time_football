import { defineStore } from 'pinia'
import { supabase } from '../services/supabase'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
    loading: false,
  }),
  actions: {
    async fetchArticles() {
      this.loading = true
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })

      if (error) console.error(error)
      else this.articles = data

      this.loading = false
    }
  }
})
