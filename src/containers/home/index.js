import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

function HomeContainer({
  categories = [],
  topRatedMovies = [],
  popularMovies = [],
  upComingMovies = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[5]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popüler Filmler "
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="En Beğenilen "
        movies={popularMovies.slice(7, 13)}
      />
      <MoviesSection title="Yakında " movies={upComingMovies.slice(7, 13)} />
    </div>
  );
}

export default HomeContainer;
