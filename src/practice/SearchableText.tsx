import {useState} from 'react';
const textList=["max","caraline","sheldon","penny","joe","jeniffer","chandller"]


function SearchableVideoList({
  texts
}: any) {
    const [searchText, setSearchText] = useState('');
    const foundTexts = filterVideos(texts, searchText);
    return <>
      // @ts-expect-error TS(2304): Cannot find name 'SearchInput'.
      <SearchInput
        value={searchText}
        onChange={(newText: any) => setSearchText(newText)} />
      // @ts-expect-error TS(2304): Cannot find name 'VideoList'.
      <VideoList
        videos={foundTexts}
        emptyHeading={`No matches for “${searchText}”`} />
    </>;
  }

  function filterVideos(texts: any,searchText: any){

  }