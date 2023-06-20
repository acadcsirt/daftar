import {get} from "https://jscroot.github.io/api/croot.js";
import {onClick} from "https://jscroot.github.io/element/croot.js";


onClick("cari-nama",get('https://api-frontend.kemdikbud.go.id/hit/awangga',responseFunction));



function responseFunction(response){
    console.log(response.dosen)
}