const INITIAL_STATE = {
	displayResults: {
	    "document_tone": {
		    "tones": [
		      {
		        "score": 0.506041,
		        "tone_id": "joy",
		        "tone_name": "Joy"
		      },
		      {
		        "score": 0.857009,
		        "tone_id": "analytical",
		        "tone_name": "Analytical"
		      }
		    ]
		  },
		"sentences_tone": [
		    {
		      "sentence_id": 0,
		      "text": "Hi Team,",
		      "tones": []
		    },
		    {
		      "sentence_id": 1,
		      "text": "",
		      "tones": []
		    },
		    {
		      "sentence_id": 2,
		      "text": "As you are well aware, AceTech has experienced a tough year.",
		      "tones": [
		        {
		          "score": 0.551283,
		          "tone_id": "sadness",
		          "tone_name": "Sadness"
		        }
		      ]
		    },
		    {
		      "sentence_id": 3,
		      "text": "Our sales have been lower than average for the past three quarters for our data analytics product suite.",
		      "tones": [
		        {
		          "score": 0.515576,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    },
		    {
		      "sentence_id": 4,
		      "text": "We have a competitive data analytics product suite in the industry.",
		      "tones": [
		        {
		          "score": 0.653099,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    },
		    {
		      "sentence_id": 5,
		      "text": "However, we are not doing a good job at selling it, and this is really frustrating.",
		      "tones": [
		        {
		          "score": 0.762356,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    },
		    {
		      "sentence_id": 6,
		      "text": "I have not taken advantage of several critical sales opportunities, many of which we as a team must take responsibility for.",
		      "tones": []
		    },
		    {
		      "sentence_id": 7,
		      "text": "Our clients need analytical tools to change their current business outcomes.",
		      "tones": []
		    },
		    {
		      "sentence_id": 8,
		      "text": "In fact, it is in times such as this, our clients want to get the insights they need to turn their businesses around.",
		      "tones": [
		        {
		          "score": 0.947982,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    },
		    {
		      "sentence_id": 9,
		      "text": "We should be working as a team to execute our goals, that is how we know we can be ore successful!",
		      "tones": [
		        {
		          "score": 0.576676,
		          "tone_id": "joy",
		          "tone_name": "Joy"
		        },
		        {
		          "score": 0.532616,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    },
		    {
		      "sentence_id": 10,
		      "text": "Jennifer Baker",
		      "tones": []
		    },
		    {
		      "sentence_id": 11,
		      "text": "Sales Leader, North-East region",
		      "tones": [
		        {
		          "score": 0.948998,
		          "tone_id": "analytical",
		          "tone_name": "Analytical"
		        }
		      ]
		    }
		  ]
	},
	isLoading: false
};


export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_RESULTS":
            return Object.assign({}, state, {
                loading: true
            });
        case "RECEIVE_RESULTS":
            return Object.assign({}, state, {
                loading: false,
                dataResults: action.dataResults
            });
        default:
            return state;
    }
}
