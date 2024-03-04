import { useState } from "react";
import './TabBar.scss'
import GridView from "../GridView";
import useQueryConfig, { QueryConfig } from "../../hooks/useQueryConfig";
import moviesApi from "../../apis/movies.api";
import { useQuery } from "react-query";
import Fallback from "../Fallback";

const tab = {
  NowPlaying: 1,
  TopRated: 2
}

function TabBar() {
  const [activeTab, setActiveTab] = useState(tab.NowPlaying);
  const handleTabClick = (tabName: number) => () => {
    setActiveTab(tabName);
  };
  
  const queryConfig: QueryConfig = useQueryConfig()
  const { data: moviesData, isLoading } = useQuery({
    queryKey: ['movieslist',activeTab, queryConfig],
    queryFn: () => {
      return getTabContent(queryConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
  })
  
  const getTabContent = (queryParams: QueryConfig) => {
    switch (activeTab) { 
      case tab.TopRated: {
        return moviesApi.getTopRatedMovies(queryParams)
      }
      case tab.NowPlaying:
        default: {
        return moviesApi.getNowPlayingMovies(queryParams)
      }
    }
  }

  return (
    <div className="tab-bar">
      <div className="tab-btn-group">
        <button
          onClick={handleTabClick(tab.NowPlaying)}
          className={activeTab === tab.NowPlaying ? 'active' : ''}
        >
          Now Playing
        </button>
        <button
          onClick={handleTabClick(tab.TopRated)}
          className={activeTab === tab.TopRated ? 'active' : ''}
        >
          Top Rated
        </button>
      </div>
      <div className="tab-content-group">
         {
            isLoading ? <Fallback /> : (
              <GridView 
                moviesList={moviesData?.data.results} 
                totalPages={moviesData?.data.total_pages}
                totalResults={moviesData?.data.total_results}
              />
            )
         }
        
      </div>
    </div>
  );
};
export default TabBar