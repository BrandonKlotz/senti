const INITIAL_STATE = {
	displayResults: {
	    "document_tone": {
	        "tones": [
	            {
	                "score": 0.625393,
	                "tone_id": "joy",
	                "tone_name": "Joy"
	            },
	            {
	                "score": 0.736354,
	                "tone_id": "analytical",
	                "tone_name": "Analytical"
	            }
	        ]
	    },
	    "sentences_tone": [
	        {
	            "sentence_id": 0,
	            "text": "This is the best new feature of the iPhone.",
	            "tones": [
	                {
	                    "score": 0.641875,
	                    "tone_id": "joy",
	                    "tone_name": "Joy"
	                }
	            ]
	        },
	        {
	            "sentence_id": 1,
	            "text": "The home button was bad so I'm glad I'm not using it.",
	            "tones": []
	        },
	        {
	            "sentence_id": 2,
	            "text": "Force touch is okay, but it really isn't my favorite.",
	            "tones": [
	                {
	                    "score": 0.882284,
	                    "tone_id": "analytical",
	                    "tone_name": "Analytical"
	                }
	            ]
	        }
	    ]
	},
		isLoading: false
	};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
