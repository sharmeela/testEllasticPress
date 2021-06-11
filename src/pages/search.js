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

const Search = (props) => (
	<ElasticPressProvider
		node="https://sharmeelajaimalani-60b5f64d4879b.clients.hosted-elasticpress.io"
		indexName="sharmeelajaimalani-60b5f64d4879b--stellalunabackdebugmein-post-1"
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

const EllasticPressSearchLayer = ({ searchState, resultsState }) => {
	return (
		<div>
			
			<main>
				<ElasticPressProvider
					node="https://sharmeelajaimalani-60b5f64d4879b.clients.hosted-elasticpress.io"
					indexName="sharmeelajaimalani-60b5f64d4879b--stellalunabackdebugmein-post-1"
					loadInitialData={false}
				>
					<AutosuggestField />

				</ElasticPressProvider>
			</main>
      
		</div>
	);
};

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

