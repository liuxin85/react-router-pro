import { useParams } from "react-router-dom";

function Article() {
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // const name = params.get("name");
  const params = useParams();
  const id = params.id;
  const name = params.name;
  return (
    <div>
      Article -- id: {id} --name: {name}
    </div>
  );
}

export default Article;
