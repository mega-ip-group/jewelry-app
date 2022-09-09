import { useState } from "react";
import { category } from "../../Utils/Utils";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryCard from "./CategoryCard";
import "./Categories.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}
));

function Categories({}) {
  const [openAll, setOpenAll] = useState(false);
  const [categoryChoosen, setCategoryChoosen] = useState({});
  console.log(categoryChoosen);
  console.log(openAll);
  

  return (

    
    <div className="categories">
      {openAll
        ? categoryChoosen.item.map((elemnt) => {
            return (
              <CategoryCard
                setCategoryChoosen={setCategoryChoosen}
                setOpenAll={setOpenAll}
                url={elemnt.url}
                description={elemnt.description}
                type={elemnt.type}
                item={null}
                price={elemnt.price}
              />
            );
          })
        : category.map((item) => {
            return (
              <CategoryCard
                setCategoryChoosen={setCategoryChoosen}
                setOpenAll={setOpenAll}
                url={item.url}
                description={item.description}
                type={item.type}
                item={item.items}
                
              /> 
            );
            
          }
          )
          }
          
    </div>
    
    

    
  );
}

export default Categories;
