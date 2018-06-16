import { hyper } from 'hyperhtml/esm';

const routes = {
  '': contentContainer => hyper.bind(contentContainer)`<page-homepage class="content-container"></page-homepage>`
};

export default routes;
