import React from "react";
import HomeContainer from "@/containers/home";

import {
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getUpcomingMovies,
} from "@/services/movie";

async function HomePage({ params }) {
  let selectedCategory;

  const [
    { genres: categories },
    { results: topRatedMovies },
    { results: popularMovies },
    { results: upComingMovies },
  ] = await Promise.all([
    getCategories(),
    getTopRatedMovies(),
    getPopularMovies(),
    getUpcomingMovies(),
  ]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }

  return (
    <HomeContainer
      categories={categories}
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      upComingMovies={upComingMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default HomePage;
