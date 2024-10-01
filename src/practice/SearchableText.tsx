import {useState} from 'react';
const textList=["max","caraline","sheldon","penny","joe","jeniffer","chandller"]


function SearchableVideoList({ texts }) {
    const [searchText, setSearchText] = useState('');
    const foundTexts = filterVideos(texts, searchText);
    return (
      <>
        <SearchInput
          value={searchText}
          onChange={newText => setSearchText(newText)} />
        <VideoList
          videos={foundTexts}
          emptyHeading={`No matches for “${searchText}”`} />
      </>
    );
  }

  function filterVideos(texts,searchText){

  }