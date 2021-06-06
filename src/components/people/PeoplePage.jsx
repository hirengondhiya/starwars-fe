import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PeopleTable } from "./PeopleTable";
import { fetchPeoplePageById } from "../../store/peoplePageSlice";
export function PeoplePage() {
  const [pageId, setPageId] = useState("1");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeoplePageById({ page: pageId }));
  }, [dispatch, pageId]);
  const page = useSelector((state) =>
    state.peoplePages.find(({ page }) => page === pageId)
  );
  function handleButtonClick(e) {
    const newPageId = page[e.target.name].split("page=")[1];
    setPageId(newPageId);
  }
  if (page) {
    return (
      <>
        {page.requestStatus === "pending" && <p>Loading page info...</p>}
        {page.requestStatus === "rejected" && (
          <p>Error loading page: {page.errorMsg}</p>
        )}
        {page.results && <PeopleTable peopleData={page.results} />}
        <p>
          <button
            name="previous"
            disabled={!page.previous}
            onClick={handleButtonClick}
          >
            Previous
          </button>
          <button name="next" disabled={!page.next} onClick={handleButtonClick}>
            Next
          </button>
        </p>
      </>
    );
  }
  return null;
}
