

const pStyle = {marginBottom: "60px"}
const p1Style = {marginTop: "200px"}


function Formations(){
    return (
        
        <div>
          
            <section id="FormationsSection" style={p1Style}>
              <div className="row expo">
                <div class="col-md-12 expo">
                    <h2>
                       FORMATIONS
                    </h2>
                    <p style={pStyle}>
                      Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                    </p>
                
                    <div className="row">
                       <div className="col-md-4">
                        <h3 >
                         Licence 1 - university Mouloud maameri
                        </h3>
                        <p>
                         Science Technologie : Math, Physics, chimie 
                        </p>
                       
                       </div>
                        <div className="col-md-4">
                          <h3>
                           Bac +1 ENIGMA Lille  
                          </h3>
                          <p>
                           
                           Au cours de ma formation à l'école d'informatique, j'ai suivi un programme complet et diversifié qui m'a permis d'acquérir une solide base de connaissances dans différents domaines de l'informatique et des technologies numériques. 
                           Cette formation m'a préparé à relever les défis passionnants du monde de l'informatique et à explorer de nouvelles opportunités dans le domaine de la technologie.
                           </p>
                       
                        </div>
                        <div className="col-md-4">
                          <h3>
                           Bac +2 ENIGMA Lille
                          </h3>
                          <p>
                           En cours
                           </p>
                         
                        </div>
                    </div>
             
                </div>
              </div>
            </section>

        </div>

    );
}


export default Formations ;
    