const Bar = () => {
return (
  <div class="container-fluid">
    <div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Sustainable Capital</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">WSP</label>
    </div>
  </div>
  <div class="col-md">
  <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Compare hazards</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Current view</label>
    </div>
  </div>
  <div class="col-md">
  <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>2030</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Period</label>
    </div>
  </div>
  <div class="col-md">
  <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Business as usual</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Scenario</label>
    </div>
  </div>
  <div class="col-md">
  <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>All</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <label htmlFor="floatingSelectGrid">Asset category</label>
    </div>
  </div>
  {/* <div class="col-md">
    <img class="img-fluid" src="/person.png" alt="search icon" width="30" height="30" />
  </div> */}
</div>
</div>
)
}
export default Bar;
