import Graph from "./Graph";

const GraphsComponent = () => {
return (
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="row">
<div class="col-lg-4 col-md-12">
<Graph />
</div>
<div class="col-lg-8 col-md-12">
<div class="row">
<div class="col-lg-4"> <Graph /> </div>
<div class="col-lg-4"> <Graph /> </div>
<div class="col-lg-4"> <Graph /> </div>
</div>
<div class="row">
<div class="col-lg-4"> <Graph /> </div>
<div class="col-lg-4"> <Graph /> </div>
<div class="col-lg-4"> <Graph /> </div>
</div>
</div>  
</div>
 </div>   

{/* 2nd row */}
 </div>  
</div>
)
}
export default GraphsComponent;