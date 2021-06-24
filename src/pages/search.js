import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from "../components/layout";

import {
	AutosuggestField,
	RelatedContent,
	SearchField,
	Posts,
	ElasticPressProvider,
	findResultsState,
} from '@10up/elasticpress-react';

const onSearchHandler = ({ searchTerm, perPage }) => {
		console.log('searchTerm', searchTerm);
	//router.push(`/?s=${searchTerm || ''}&perPage=${perPage}`);
};

{/*const Search = (props) => (
	<ElasticPressProvider
		node="https://vishalkhialani-60c6cf39684ab.clients.hosted-elasticpress.io"
		indexName="vishalkhialani-60c6cf39684ab--stellalunabackdebugmein-post-1"
		onSearch={onSearchHandler}
		{...props}
	>
		<div>
			<SearchField debounceMs={100} />
		</div>

		<div>
			<Posts />
		</div>
	</ElasticPressProvider>
);

export async function getServerSideProps({ query }) {
	const searchState = {
		searchTerm: query.s || null,
		perPage: query.perPage || 10,
	};

	const resultsState = await findResultsState(Search, {
		searchState,
	});

	return {
		props: { searchState, resultsState },
	};
}
*/}

const EllasticPressSearchLayer = ({ searchState, resultsState }) => {
	return (
		<div>
			
			<main>
				<ElasticPressProvider
					node="https://vishalkhialani-60c6cf39684ab.clients.hosted-elasticpress.io"
					indexName="vishalkhialani-60c6cf39684ab--stellalunabackdebugmein-post-1"
					loadInitialData={true}
				>
					<AutosuggestField />

				</ElasticPressProvider>
			</main>
      
		</div>
	);
};

class SearchPage extends Component {  
    render() {        
        return (
            <Layout>
                <h1>Ellasticpress search </h1>
				<EllasticPressSearchLayer />
            </Layout>
        )
    }
}

export default SearchPage;

