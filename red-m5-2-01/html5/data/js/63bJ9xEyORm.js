﻿window.globalProvideData('slide', '{"title":"Aktivite - 1","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":7,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide7","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"63bJ9xEyORm","variables":[{"kind":"variable","name":"hotspot_6rT4fKXnr5H_xpos","type":"number","value":-1,"resume":true},{"kind":"variable","name":"hotspot_6rT4fKXnr5H_ypos","type":"number","value":-1,"resume":true}],"actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"#hotspot_6rT4fKXnr5H_xpos","typea":"var","valueb":-1,"typeb":"number"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6AavTKPaog0"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6V2e8upnUOt.InvalidPromptSlide"}}]}]},"ReviewInt_6rT4fKXnr5H":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5d4T6Hqm1if"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5e391WEA1o0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6QquoBoNeOj"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5i2CwiQ78PR"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6AavTKPaog0.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rT4fKXnr5H_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rT4fKXnr5H_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rT4fKXnr5H","typea":"var","valueb":"6pVbGnzwKDl","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns01000000001"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}}]},{"kind":"set_review","objRef":{"type":"string","value":"hotspot_6rT4fKXnr5H"},"enabled":{"type":"boolean","value":true}}]},"ReviewIntCorrectIncorrect_6rT4fKXnr5H":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5d4T6Hqm1if.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5d4T6Hqm1if"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"5d4T6Hqm1if"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"5d4T6Hqm1if.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5d4T6Hqm1if"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5e391WEA1o0.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e391WEA1o0"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"5e391WEA1o0"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"5e391WEA1o0.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5e391WEA1o0"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6QquoBoNeOj.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6QquoBoNeOj"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"6QquoBoNeOj"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"6QquoBoNeOj.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6QquoBoNeOj"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5i2CwiQ78PR.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5i2CwiQ78PR"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"5i2CwiQ78PR"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"5i2CwiQ78PR.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5i2CwiQ78PR"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6rT4fKXnr5H":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6rT4fKXnr5H"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns01000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns01000000001"}]}]},"DisableChoices_6rT4fKXnr5H":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5d4T6Hqm1if"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5e391WEA1o0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6QquoBoNeOj"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5i2CwiQ78PR"},"enabled":{"type":"boolean","value":false}}]},"6rT4fKXnr5H_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6AavTKPaog0.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6pVbGnzwKDl.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6rT4fKXnr5H"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6AavTKPaog0.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6AavTKPaog0.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6rT4fKXnr5H"}]}]}]}]},"SetLayout_pxabnsnfns01000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns01000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns01000000001"}]}]},"NavigationRestrictionNextSlide_63bJ9xEyORm":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5W7m6Bcm9PU"}}]},"NavigationRestrictionPreviousSlide_63bJ9xEyORm":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6pVbGnzwKDl.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6pVbGnzwKDl_timer"},{"kind":"showtimer","id":"_player.6pVbGnzwKDl_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns01000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns01000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6V2e8upnUOt","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6V2e8upnUOt","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6rT4fKXnr5H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6rT4fKXnr5H"}],"elseActions":[{"kind":"exe_actiongroup","id":"6rT4fKXnr5H_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6rT4fKXnr5H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rT4fKXnr5H","typea":"var","valueb":"6pVbGnzwKDl","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6pVbGnzwKDl"},"completed_slide_ref":{"type":"string","value":"_player.5fdI8zC1Jyj.67e5yZWCK9t"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6rT4fKXnr5H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rT4fKXnr5H","typea":"var","valueb":"6pVbGnzwKDl","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6pVbGnzwKDl"},"completed_slide_ref":{"type":"string","value":"_player.5fdI8zC1Jyj.67e5yZWCK9t"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_63bJ9xEyORm"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_63bJ9xEyORm"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6rT4fKXnr5H"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6FNFHCCvmIJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5d4T6Hqm1if"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e391WEA1o0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5i2CwiQ78PR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6QquoBoNeOj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nMymJo6PyS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"675qsNO9rKB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5UrJ7ESyUkE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5nSKXlln0PM"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/5dWrAReTPFx_80_DX1516_DY1516.swf","type":"normal","altText":"Picture 5.png","width":1516,"height":377,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":43,"yPos":-7,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":379,"rotateYPos":94,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":758,"bottom":188,"altText":"Picture 5.png","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":0,"yPos":0,"width":758,"height":188,"strokewidth":0}},"width":758,"height":188,"resume":true,"useHandCursor":true,"id":"5nSKXlln0PM"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":11,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":960,"bottom":540,"pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":0,"yPos":0,"width":960,"height":540,"strokewidth":0}},"width":960,"height":540,"resume":true,"useHandCursor":true,"id":"hotspot_6rT4fKXnr5H","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":30,"id":"01","url":"story_content/6hYqfkA9QIN_80_DX822_DY822.swf","type":"normal","altText":"soru6.png","width":411,"height":237,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":32,"yPos":166,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":208,"rotateYPos":120,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":416,"bottom":240,"altText":"soru6.png","pngfb":false,"pr":{"l":"Lib","i":68}},"html5data":{"xPos":0,"yPos":0,"width":416,"height":240,"strokewidth":0}},"width":416,"height":240,"resume":true,"useHandCursor":true,"id":"6FNFHCCvmIJ","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":38,"yPos":179,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":132.5,"rotateYPos":36.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":267,"bottom":74,"altText":"Rectangular Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":0,"yPos":0,"width":267,"height":74,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":268,"bottom":75,"altText":"Rectangular Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":70}},"html5data":{"xPos":-1,"yPos":-1,"width":269,"height":76,"strokewidth":2}}}],"width":266,"height":74,"resume":true,"useHandCursor":true,"id":"5d4T6Hqm1if","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":39,"yPos":249,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":201.5,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":404,"bottom":49,"altText":"Rectangular Hotspot 2","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":0,"yPos":0,"width":404,"height":49,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":405,"bottom":50,"altText":"Rectangular Hotspot 2","pngfb":false,"pr":{"l":"Lib","i":72}},"html5data":{"xPos":-1,"yPos":-1,"width":406,"height":51,"strokewidth":2}}}],"width":404,"height":48,"resume":true,"useHandCursor":true,"id":"5e391WEA1o0","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":39,"yPos":347,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":204,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":409,"bottom":66,"altText":"Rectangular Hotspot 3","pngfb":false,"pr":{"l":"Lib","i":73}},"html5data":{"xPos":0,"yPos":0,"width":409,"height":66,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":410,"bottom":67,"altText":"Rectangular Hotspot 3","pngfb":false,"pr":{"l":"Lib","i":74}},"html5data":{"xPos":-1,"yPos":-1,"width":411,"height":68,"strokewidth":2}}}],"width":409,"height":65,"resume":true,"useHandCursor":true,"id":"5i2CwiQ78PR","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":40,"yPos":294,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":115.5,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":232,"bottom":49,"altText":"Rectangular Hotspot 4","pngfb":false,"pr":{"l":"Lib","i":75}},"html5data":{"xPos":0,"yPos":0,"width":232,"height":49,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":233,"bottom":50,"altText":"Rectangular Hotspot 4","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":-1,"yPos":-1,"width":234,"height":51,"strokewidth":2}}}],"width":232,"height":48,"resume":true,"useHandCursor":true,"id":"6QquoBoNeOj","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6nMymJo6PyS_1122857852","id":"01","linkId":"txt__default_6nMymJo6PyS","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":458,"height":201,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Görselde belirtilen kodlama da ledlerin aynı anda sönmemesi için kullanılan kod bloğu hangisidir?\\n","style":{"fontFamily":"\\"Quicksand Charset0_v9TY08BEB009\\",\\"Quicksand\\"","fontSize":20,"ascent":26.667,"descent":6.667,"leading":0,"underlinePosition":-2.667,"underlineThickness":1.333,"xHeight":13.413}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":21.6,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":98,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"\\n","style":{"fontFamily":"\\"Quicksand Charset0_v9TY08BEB009\\",\\"Quicksand\\"","fontSize":20,"ascent":26.667,"descent":6.667,"leading":0,"underlinePosition":-2.667,"underlineThickness":1.333,"xHeight":13.413}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":21.6,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Not: Seçtiğiniz kod bloğunun üstüne tıklayın.","style":{"fontFamily":"\\"Quicksand Charset0_v9TY08BEB009\\",\\"Quicksand\\"","fontSize":20,"foregroundColor":"#FF0000","linkColor":"#FF0000","ascent":26.667,"descent":6.667,"leading":0,"underlinePosition":-2.667,"underlineThickness":1.333,"xHeight":13.413}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":21.6,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":45,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Quicksand","fontSize":20,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":453,"bottom":204,"pngfb":false,"pr":{"l":"Lib","i":78}}}],"shapemaskId":"","xPos":464,"yPos":158,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":236,"rotateYPos":103.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":472,"bottom":207,"altText":"Görselde belirtilen kodlama da ledlerin aynı anda sönmemesi için kullanılan kod bloğu hangisidir?\\n\\nNot: Seçtiğiniz kod bloğunun üstüne tıklayın.","pngfb":false,"pr":{"l":"Lib","i":77}},"html5data":{"xPos":0,"yPos":0,"width":472,"height":207,"strokewidth":0}},"width":472,"height":207,"resume":true,"useHandCursor":true,"id":"6nMymJo6PyS","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"675qsNO9rKB_-2042528756","id":"01","linkId":"txt__default_675qsNO9rKB","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":551,"height":69,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Aktivite - 1","style":{"fontFamily":"\\"Quicksand Charset0_v9TY08BEB009\\",\\"Quicksand\\"","fontSize":40,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":53.333,"descent":13.333,"leading":0,"underlinePosition":-5.333,"underlineThickness":2.667,"xHeight":26.827}}],"style":{"listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":32.4,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":12,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Quicksand SemiBold","fontSize":22.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":257,"bottom":71,"pngfb":false,"pr":{"l":"Lib","i":20}}}],"shapemaskId":"","xPos":190,"yPos":27,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":282.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":566,"bottom":76,"altText":"Aktivite - 1","pngfb":false,"pr":{"l":"Lib","i":19}},"html5data":{"xPos":0,"yPos":0,"width":566,"height":76,"strokewidth":0}},"width":565,"height":75,"resume":true,"useHandCursor":true,"id":"675qsNO9rKB","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5UrJ7ESyUkE_406231544","id":"01","linkId":"txt__default_5UrJ7ESyUkE","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":496,"height":39,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"6. Soru","style":{"fontFamily":"\\"Quicksand Charset0_v9TY08BEB009\\",\\"Quicksand\\"","fontSize":20,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":26.667,"descent":6.667,"leading":0,"underlinePosition":-2.667,"underlineThickness":1.333,"xHeight":13.413}}],"style":{"listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":21.6,"spacingBefore":5.625,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"\\"Arial Charset0_v8wz5YMo9EE9FF07\\",\\"Arial\\"","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":7,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Quicksand Medium","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":90,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":79}}}],"shapemaskId":"","xPos":190,"yPos":100,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":255,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":511,"bottom":46,"altText":"6. Soru","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":0,"yPos":0,"width":511,"height":46,"strokewidth":0}},"width":510,"height":45,"resume":true,"useHandCursor":true,"id":"5UrJ7ESyUkE","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6rT4fKXnr5H_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6rT4fKXnr5H_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-30,"yPos":-30,"tabIndex":10,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":80}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":10,"height":10,"resume":true,"useHandCursor":true,"id":"hotspot_6rT4fKXnr5H_marker"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rT4fKXnr5H_CorrectReview","id":"01","linkId":"6rT4fKXnr5H_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":516,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":26}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Doğru","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6rT4fKXnr5H_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rT4fKXnr5H_IncorrectReview","id":"01","linkId":"6rT4fKXnr5H_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":513,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":28}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Yanlış","pngfb":false,"pr":{"l":"Lib","i":27}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6rT4fKXnr5H_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');