import React from 'react';
import { Route } from 'react-router';
import App from './app';
import HomePage from './home/home.page';
import AboutPage from './about/about.page';
import InventoryPage from "./inventory/inventory.page";
import AddUnitPage from "./units/add.unit.page";
import { BrowserRouter } from 'react-router-dom';

export default (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            {/* <IndexRoute component={HomePage}/> */}
            <Route exact path="/" component={HomePage} />
            
            <Route path="about" component={AboutPage} />
            <Route path="inventory" component={InventoryPage} />
            <Route path="new-unit" component={AddUnitPage} />
            <Route path="*" component={HomePage} />
        </div>
    </BrowserRouter>
);