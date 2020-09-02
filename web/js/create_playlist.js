/*Creates a Playlist Page Dynamically From a Markdown File
* Allison Moore
* 6/27/20
*/
function CreatePlaylistMain(){
     console.log("Create Playlist");
     var mydls = CollectAllDivs();

}

/*CollectAllDivs
 *Collect an Array of all the divs in the Markdown file
* And return that Array
*/
function CollectAllDivs(){
     var mycontent = document.getElementById("mycontent");
     console.log(mycontent.innerHTML);
     var mydls = mycontent.getElementsByTagName("dl");
     for (var i = 0; i < mydls.length; i++){
          CreatePlaylistSection(mydls[i]);
     }
     return mydls;
}
 /* Create Sections by Div
 * loops though the divs and creates sections in order to be appended
 * to the main document based on div name
 * UPDATE AS NEW SECTIONS ARE MADE
 */
 function CreatePlaylistSection(mydl){
      let simplediv = document.createElement("div");
      simplediv.className = "playlist_section";
      var playlist_sec_format = document.getElementById("sample_playlist_section");
      simplediv.innerHTML = playlist_sec_format.innerHTML;
      var mydts = mydl.getElementsByTagName("dt");
     let gall_run = false;
      for(var i = 0; i < mydts.length;i++){
          if (mydts[i].innerHTML == "title"){
                let my_value = mydts[i];
                while(my_value.nextElementSibling != null  && my_value.nextElementSibling.tagName == "DD" && my_value.nextElementSibling.tagName != "DT"){
                     simplediv.getElementsByClassName("myconpageheader")[0].innerHTML = mydts[i].nextElementSibling.innerHTML;
                     my_value= my_value.nextElementSibling;
               }
          } else if(mydts[i].innerHTML == "placematpic"){
               let my_value = mydts[i];
               while(my_value.nextElementSibling != null  && my_value.nextElementSibling.tagName == "DD" && my_value.nextElementSibling.tagName != "DT" && my_value.nextElementSibling.tagName != "dt"){
                    simplediv.getElementsByClassName("def_bloc_img_head")[0].src = mydts[i].nextElementSibling.innerHTML;
                    my_value= my_value.nextElementSibling;
              }
         } else if(mydts[i].innerHTML == "placematlinks"){
              let my_value = mydts[i];
              let myswitch = 0;
              while(my_value.nextElementSibling != null && my_value.nextElementSibling.tagName == "DD" && my_value.nextElementSibling.tagName != "DT"){
                   console.log("time out");
                  let foundlink = my_value.nextElementSibling.getElementsByTagName('a')[0];
                  if(foundlink){
                       console.log(foundlink);
                  let mynewlink = document.createElement("a");
                  mynewlink.className = "playlist_descrip_link marginbutt myButton";
                  mynewlink.href = foundlink.href;
                  mynewlink.innerHTML = foundlink.innerHTML;
                  let mini_append_here = simplediv.getElementsByClassName("special_app")[0];
                  mini_append_here.append(mynewlink);
             }
             my_value = my_value.nextElementSibling;


            }
         } else if (mydts[i].innerHTML == "gallery"){
             let my_value = mydts[i];
             while((!gall_run) && my_value.nextElementSibling != null  && my_value.nextElementSibling.tagName == "DD" && my_value.nextElementSibling.tagName != "DT"){

                  let new_media_element = document.createElement("div");
                  new_media_element.className = "media_element col-sm-4 col-md-4 col-lg-4";
                  if(my_value.nextElementSibling.innerHTML.includes("<iframe")){
                      let simple_iframe= document.createElement("iframe");
                      simple_iframe.src = my_value.nextElementSibling.getElementsByTagName("iframe")[0].src;
                      new_media_element.append(simple_iframe);
                 } else{
                      let simple_img = document.createElement("img");
                      simple_img.src = my_value.nextElementSibling.innerHTML;
                      new_media_element.append(simple_img);
                 }
                 simplediv.getElementsByClassName("media_content")[0].append(new_media_element);
                 my_value = my_value.nextElementSibling;
               }
                gall_run = true;
         } else if (mydts[i].innerHTML == "description"){
              let my_value = mydts[i];
              while(my_value.nextElementSibling != null  && my_value.nextElementSibling.tagName == "DD" && my_value.nextElementSibling.tagName != "DT"){
                   simplediv.getElementsByClassName("playlist_descrip")[0].innerHTML = mydts[i].nextElementSibling.innerHTML;
                   my_value= my_value.nextElementSibling;
            }
         }
      }

      var my_app = document.getElementById("append_here");
      my_app.append(simplediv);
}
