import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {

    'previewMode': false,

    'dragStart': null,

		'selectedSection': null,
		'selectedBlock': null,

    'mjml': {
      
      'style': {
        'a': {
          'color': 'red'
        }
      },

      "tagName":"mj-global-style",

      "children":[
          {  
             "tagName":"mj-container",
             "attributes":{  
                "background-color":"#d7dde5"
             },
             "children":[  
                {  
                   "tagName":"mj-section",
                   "attributes":{  
                      "full-width":"full-width",
                      "padding-top": "9",
                      "padding-bottom": "9",
                      "background-color": "transparent"
                   },
                   "uid": Math.random().toString(36).slice(18),
                   "children":[  
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"66.66666666666666%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"left",
                                  "font-size":"11",
                                  "padding-bottom": 0,
                                  "padding-top": 0
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<span style=\"font-size: 11px;\">Napi\u0161te kr\u00e1tk\u00e9 shrnut\u00ed va\u0161eho e-mailu, tzv. \"preheader\"<\/span>  ]]--> "
                            }
                         ]
                      },
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"33.33333333333333%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"right",
                                  "font-size":"11",
                                  "padding-bottom": 0,
                                  "padding-top": 0
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<span style=\"color: #000000;\"><strong><a style=\"color: #000000;\" href=\"*|WEBVERSION|*\">Zobrazit e-mail online<\/a><\/strong><\/span>  ]]--> "
                            }
                         ]
                      }
                   ]
                },
                {  
                   "tagName":"mj-section",
                   "attributes":{  
                      "background-color":"#ffffff",
                      "full-width":"full-width",
                   },
                   "uid": Math.random().toString(36).slice(18),
                   "children":[  
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"33.33333333333333%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-image",
                               "attributes":{  
                                  "src":"http:\/\/191n.mj.am\/img\/191n\/1t\/hs.png",
                                  "alt":"",
                                  "padding-bottom":"0",
                                  "padding-top":"30",
                                  "width":"30"
                               },
                               "uid": Math.random().toString(36).slice(18)
                            },
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "color":"#9da3a3",
                                  "font-size":"11",
                                  "padding-bottom":"30",
                                  "padding-top":"20"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<span style=\"font-size: 14px; color: #e85034;\">Kr\u00e1sn\u00e9 \u0161ablony<\/span><br\/><br\/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper dignissim.  ]]--> "
                            }
                         ]
                      },
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"33.33333333333333%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-image",
                               "attributes":{  
                                  "src":"http:\/\/191n.mj.am\/img\/191n\/1t\/hm.png",
                                  "alt":"",
                                  "padding-bottom":"0",
                                  "padding-top":"30",
                                  "width":"30"
                               },
                               "uid": Math.random().toString(36).slice(18)
                            },
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "color":"#9da3a3",
                                  "font-size":"11",
                                  "padding-bottom":"30",
                                  "padding-top":"20"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<span style=\"font-size: 14px; color: #e85034;\">V\u00edce proklik\u016f<\/span><br\/><br\/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper dignissim.  ]]--> "
                            }
                         ]
                      },
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"33.33333333333333%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-image",
                               "attributes":{  
                                  "src":"http:\/\/191n.mj.am\/img\/191n\/1t\/hl.png",
                                  "alt":"",
                                  "padding-bottom":"0",
                                  "padding-top":"30",
                                  "width":"30"
                               },
                               "uid": Math.random().toString(36).slice(18)
                            },
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "color":"#9da3a3",
                                  "font-size":"11",
                                  "padding-bottom":"30",
                                  "padding-top":"20"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<span style=\"font-size: 14px; color: #e85034;\">P\u0159ipraveno pro mobily<\/span><br\/><br\/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sagittis nunc, et fermentum est ullamcorper dignissim.  ]]--> "
                            }
                         ]
                      }
                   ]
                },
                {  
                   "tagName":"mj-section",
                   "attributes":{  
                      "background-color":"#e85034",
                      "full-width":"full-width"
                   },
                   "uid": Math.random().toString(36).slice(18),
                   "children":[  
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"100%",
                            "containerWidth":600
                         },
                         "children":[  
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "color":"#ffffff",
                                  "font-size":"18",
                                  "padding-bottom":"10",
                                  "padding-top":"25",
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[Pro\u010d si vybrat zrovna n\u00e1s?  ]]--> "
                            },
                            {  
                               "tagName":"mj-divider",
                               "attributes":{  
                                  "border-color":"#fff",
                                  "border-style":"solid",
                                  "border-width":"1px",
                                  "padding-left":"100",
                                  "padding-right":"100",
                                  "padding-bottom":"20",
                                  "padding-top":"20",
                               },
                               "uid": Math.random().toString(36).slice(18)
                            },
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "color":"#f8d5d1",
                                  "font-size":"11",
                                  "padding-bottom":"25",
                                  "padding-top":"20"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  ]]--> "
                            }
                         ]
                      }
                   ]
                },
                {  
                   "tagName":"mj-section",
                   "attributes":{  
                      "background-color":"#ffffff",
                      "full-width":"full-width"
                   },
                   "uid": Math.random().toString(36).slice(18),
                   "children":[  
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"50%",
                            "vertical-align":"middle"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-image",
                               "attributes":{  
                                  "src":"http:\/\/191n.mj.am\/img\/191n\/1t\/h2.jpg",
                                  "alt":"",
                                  "padding-bottom":"20",
                                  "padding-top":"20"
                               },
                               "uid": Math.random().toString(36).slice(18)
                            }
                         ]
                      },
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"50%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"left",
                                  "color":"#9da3a3",
                                  "font-size":"11",
                                  "padding-bottom":"25",
                                  "padding-top":"25"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<span style=\"font-weight: bold; font-size: 14px; color: #45474e;\">Vytvo\u0159te si podobnou \u0161ablonu rychle a jednodu\u0161e<\/span><br\/><br\/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                            },
                            {  
                               "tagName":"mj-button",
                               "attributes":{  
                                  "align":"left",
                                  "background-color":"#e85034",
                                  "color":"#fff",
                                  "border-radius":"24px",
                                  "font-size":"11",
                                  "href":"https:\/\/mjml.io",
                                  "font-family":"Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif",
                                  "padding-bottom":"45",
                                  "padding-top":"10"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[CHCI V\u011aD\u011aT V\u00cdCE  ]]--> "
                            }
                         ]
                      }
                   ]
                },
                {  
                   "tagName":"mj-section",
                   "attributes":{  
                      "full-width":"full-width"
                   },
                   "uid": Math.random().toString(36).slice(18),
                   "children":[  
                      {  
                         "tagName":"mj-column",
                         "attributes":{  
                            "width":"100%"
                         },
                         "children":[  
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "font-size":"11",
                                  "padding-bottom":"0",
                                  "padding-top":"0"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<p style=\"font-size: 11px;\">Zde pros\u00edm vlo\u017ete va\u0161i adresu a v\u00e1s kontakt<\/p>\n<p style=\"font-size: 11px;\">Informujte adres\u00e1ta o tom, pro\u010d e-mail dostal a jak se ocitl ve va\u0161em mailing listu<\/p>  ]]--> "
                            },
                            {  
                               "tagName":"mj-text",
                               "attributes":{  
                                  "align":"center",
                                  "font-size":"11",
                                  "padding-bottom":"0",
                                  "padding-top":"0"
                               },
                               "uid": Math.random().toString(36).slice(18),
                               "content":"<!--[CDATA[<p style=\"font-size: 11px;\">Nechcete ji\u017e nad\u00e1le odeb\u00edrat tyto e-maily?<br\/>To n\u00e1s mrz\u00ed. <span style=\"color: #000000;\"><strong><a style=\"color: #000000;\" href=\"*|UNSUB|*\">Odhl\u00e1sit se m\u016f\u017eete zde<\/a><\/strong><\/span><\/p>  ]]--> "
                            }
                         ]
                      }
                   ]
                }
             ]
          }
       ]
    },

    'defaultSectionProps': {
      'layout': 1,
      'backgroundColor': '',
      'backgroundImage': '',
      'paddingTop': 0,
      'paddingBottom': 0,
      'paddingLeft': 0,
      'paddingRight': 0
    },

		'defaultBlockProps': {

			'Image': {
        "tagName":"mj-image",
         "attributes":{  
            "src":"http:\/\/191n.mj.am\/img\/191n\/1t\/h2.jpg",
            "alt":"",
            "padding-bottom":"20",
            "padding-top":"20",
            "width": 80,
            "containerWidth":300
         },
				'src': 'https://image.flaticon.com/icons/png/128/321/321770.png'
			},

      'Divider': {
        "tagName":"mj-divider",
         "attributes":{  
            "border-color":"red",
            "border-style":"solid",
            "border-width":"1px",
            "padding-left":"10",
            "padding-right":"10",
            "padding-bottom":"20",
            "padding-top":"20",
         }
      },

      'Button': {
        "tagName":"mj-button",
         "attributes":{  
            "align":"left",
            "background-color":"#e85034",
            "color":"#fff",
            "border-radius":"24px",
            "font-size":"11",
            "href":"https:\/\/mjml.io",
            "font-family":"Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif",
            "padding-bottom":"45",
            "padding-top":"10"
         },
         "content":"blablabla"
      },

      'Spacer': {
        "tagName":"mj-spacer",
         "attributes":{  
            "height": 50
         }
      },

      'Text': {
        "tagName":"mj-text",
         "attributes":{  
            "align":"left",
            "font-size":"11",
            "padding-bottom": 0,
            "padding-top": 0,
            "color": "green"
         },
         "content":"<!--[CDATA[<span style=\"font-size: 11px;\">Napi\u0161te kr\u00e1tk\u00e9 shrnut\u00ed va\u0161eho e-mailu, tzv. \"preheader\"<\/span>  ]]--> "
      }

		}

	},

  getters: {

    getActiveBlockPropInt: (state, getters) => (prop) => {
      return parseInt(state.definition.sections[state.selectedBlock.sectionIndex].columns[state.selectedBlock.columnIndex].blocks[state.selectedBlock.blockIndex][prop]) 
    },

    getActiveBlockAttrInt: (state, getters) => (prop) => {
      return parseInt(state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex].attributes[prop]) 
    },

    getActiveBlockAttrString: (state, getters) => (prop) => {
      return state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex].attributes[prop]
    },

    getActiveBlockPropString: (state, getters) => (prop) => {
      return state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex][prop]
    },

    getActiveSectionAttrInt: (state, getters) => (prop) => {
      return parseInt(state.mjml.children[0].children[state.selectedSection.index].attributes[prop])
    },

    getActiveSectionAttrString: (state, getters) => (prop) => {
      return state.mjml.children[0].children[state.selectedSection.index].attributes[prop]
    },

    getBodyBg: (state, getters) => () => {
      return state.mjml.children[0].attributes['background-color']
    },

    getBaseAttrString: (state, getters) => (prop) => {
      return state.mjml.attributes[prop]
    }

  },

	mutations: {

		SET_SELECTED_SECTION(state, section){
			if(state.selectedSection){
				state.selectedSection.deselect()
			}
      if(state.selectedBlock){
        state.selectedBlock.deselect()
        state.selectedBlock = null
      }
     	state.selectedSection = section
		},

		CLEAR_SELECTED_SECTION(state){
   		if(state.selectedSection){
				state.selectedSection.deselect()
			}
      if(state.selectedBlock){
        state.selectedBlock.deselect()
        state.selectedBlock = null
      }
     	state.selectedSection = null
   	},

   	SET_SELECTED_BLOCK(state, block){
			if(state.selectedBlock){
				state.selectedBlock.deselect()
        state.selectedBlock = null
			}
      if(state.selectedSection){
        state.selectedSection.deselect()
        state.selectedSection = null
      }
     	state.selectedBlock = block
   	},

   	CLEAR_SELECTED_BLOCK(state){
   		if(state.selectedBlock){
				state.selectedBlock.deselect()
			}
  		if(state.selectedSection){
    		state.selectedSection.deselect()
    		state.selectedSection = null
  		}
   		state.selectedBlock = null
 		},

 		CLEAR_SELECTION(state){
    	if(state.selectedSection){
      	state.selectedSection.deselect()
      	state.selectedSection = null
    	}
    	if(state.selectedBlock){
      	state.selectedBlock.deselect()
      	state.selectedBlock = null
    	}
  	},

    ADD_SECTION(state, props){
      for (var property in state.defaultSectionProps) {
        if (state.defaultSectionProps.hasOwnProperty(property)) {
            props[property] = state.defaultSectionProps[property]
        }
      }
      props['uid'] = Math.random().toString(36).slice(18)
      var sectionIndex = props.sectionIndex
      delete props.sectionIndex
      state.mjml.children[0].children.splice(sectionIndex, 0, props)
 		},

    DUPLICATE_SECTION(state, props){
      var copySection = _.clone(state.mjml.children[0].children[props.sectionIndex])
      copySection.uid = Math.random().toString(36).slice(18)
      state.mjml.children[0].children.splice(props.sectionIndex, 0, copySection)
    },

    DELETE_SECTION(state, props){
      state.mjml.children[0].children.splice(state.selectedSection.index, 1)
      state.selectedSection = null
    },

 		ADD_BLOCK_TO_INDEX(state, props){
      for (var property in state.defaultBlockProps[props.block.type]) {
        if (state.defaultBlockProps[props.block.type].hasOwnProperty(property)) {
          props.block[property] = state.defaultBlockProps[props.block.type][property]
        }
    	}
   		//state.definition.sections[props.sectionIndex].columns[props.columnIndex].blocks.splice(props.blockIndex, 0, props.block)
      state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children.splice(props.blockIndex, 0, props.block)
 		},

    DUPLICATE_BLOCK(state, props){
      var copyBlock = _.clone(state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children[props.blockIndex])
      copyBlock.uid = Math.random().toString(36).slice(18)
      state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children.splice(props.blockIndex, 0, copyBlock)
    },

    DELETE_BLOCK(state, props){
      state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children.splice(props.blockIndex, 1)
      state.selectedSection = null
      state.selectedBlock = null
    },

  	UPDATE_BLOCK_PROP(state, props){
    	//state.definition.sections[state.selectedBlock.sectionIndex].columns[state.selectedBlock.columnIndex].blocks[state.selectedBlock.blockIndex][props.prop] = props.value;
      state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex][props.prop] = props.value;
  	},

    UPDATE_SPECIFIC_BLOCK_PROP(state, props){
      //state.definition.sections[state.selectedBlock.sectionIndex].columns[state.selectedBlock.columnIndex].blocks[state.selectedBlock.blockIndex][props.prop] = props.value;
      state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children[props.blockIndex][props.prop] = props.value;
    },

    UPDATE_BLOCK_ATTRIBUTE(state, props){
      //state.definition.sections[state.selectedBlock.sectionIndex].columns[state.selectedBlock.columnIndex].blocks[state.selectedBlock.blockIndex][props.prop] = props.value;
      state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex].attributes[props.prop] = props.value;
      //state.mjml.children[0].children[this.sectionIndex].children[state.selectedBlock.blockIndex].attributes[props.prop] = props.value;
      //console.log(state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex])
    },

    UPDATE_SECTION_PROP(state, props){
      //state.definition.sections[state.selectedSection.index][props.prop] = props.value;
    },

    UPDATE_SECTION_ATTRIBUTE(state, props){
      //state.definition.sections[state.selectedBlock.sectionIndex].columns[state.selectedBlock.columnIndex].blocks[state.selectedBlock.blockIndex][props.prop] = props.value;
      state.mjml.children[0].children[state.selectedSection.index].attributes[props.prop] = props.value;
      //state.mjml.children[0].children[this.sectionIndex].children[state.selectedBlock.blockIndex].attributes[props.prop] = props.value;
      //console.log(state.mjml.children[0].children[state.selectedBlock.sectionIndex].children[state.selectedBlock.columnIndex].children[state.selectedBlock.blockIndex])
    },

    SET_START_DRAG_OPTIONS(state, props){
      state.dragStart = props
    },

    DELETE_START_DRAG_OPTIONS(state, props){
      state.dragStart = null
    },

  	REORDER_BLOCKS(state, props){
    	var blockArray = state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children

      // Move item in array from props.oldIndex to props.newIndex
    	if (props.newIndex >= blockArray.length) {
        var k = props.newIndex - blockArray.length
        while ((k--) + 1) {
          blockArray.push(undefined)
        }
    	}
    	blockArray.splice(props.newIndex, 0, blockArray.splice(props.oldIndex, 1)[0])

  	},

    REORDER_BLOCKS_BETWEEN_COLUMNS(state, props){
      //console.log('REORDER_BLOCKS_BETWEEN_COLUMNS')
      var oldBlockArray = state.mjml.children[0].children[props.oldSectionIndex].children[props.oldColumnIndex].children
      var oldBlock = _.clone(state.mjml.children[0].children[props.oldSectionIndex].children[props.oldColumnIndex].children[props.oldIndex])
      //oldBlock.uid = Math.random().toString(36).slice(18)
      oldBlockArray.splice(props.oldIndex, 1)

      var blockArray = state.mjml.children[0].children[props.sectionIndex].children[props.columnIndex].children
      //var oldBlock = JSON.parse('{"tagName":"mj-divider","attributes":{"border-color":"#fff","border-style":"solid","border-width":"1px","padding-left":"100","padding-right":"100","padding-bottom":"20","padding-top":"20"}}')
      oldBlock.uid = Math.random().toString(36).slice(18)
      blockArray.splice(props.newIndex, 0, oldBlock);
    },

    TOGGLE_PREVIEW_MODE(state, props){
      if(!state.previewMode){
        state.previewMode = true
      } else {
        state.previewMode = false
      }
    }

	},

	actions: {

		setSelectedSection({commit}, section){
			commit('SET_SELECTED_SECTION', section)
		},

  	setSelectedBlock({commit}, block){
    		commit('SET_SELECTED_BLOCK', block)
  	},

  	clearSelectedBlock({commit}){
   		commit('CLEAR_SELECTED_BLOCK')
 		},

 		addSection({commit}, props){
   		commit('ADD_SECTION', {
        "tagName":"mj-section",
        "attributes":{  
          "full-width":"full-width",
          "padding":"9px 0px 9px 0px"
        },
        "children": props.columns,
        "sectionIndex": props.sectionIndex
      })
 		},

    duplicateSection({commit}, props){
      commit('DUPLICATE_SECTION', props)
    },

    deleteSection({commit}, props){
      commit('DELETE_SECTION', props)
    },

 		addBlock({commit}, props){
   		commit('ADD_BLOCK_TO_INDEX', props)
 		},

    duplicateBlock({commit}, props){
      commit('DUPLICATE_BLOCK', props)
    },

    deleteBlock({commit}, props){
      commit('DELETE_BLOCK', props)
    },

  	clearSelection({commit}){
    	commit('CLEAR_SELECTION')
  	},

  	updateBlockProp({commit}, props){
    	commit('UPDATE_BLOCK_PROP', props)
  	},

    updateSpecificBlockProp({commit}, props){
      commit('UPDATE_SPECIFIC_BLOCK_PROP', props)
    },

    updateBlockAttribute({commit}, props){
      commit('UPDATE_BLOCK_ATTRIBUTE', props)
    },

    updateSectionProp({commit}, props){
      commit('UPDATE_SECTION_PROP', props)
    },

    updateSectionAttribute({commit}, props){
      commit('UPDATE_SECTION_ATTRIBUTE', props)
    },

  	reorderBlocks({commit}, props){
    	commit('REORDER_BLOCKS', props)
  	},

    reorderBlocksBetweenColumns({commit}, props){
      commit('REORDER_BLOCKS_BETWEEN_COLUMNS', props)
    },

    togglePreview({commit}, props){
      commit('TOGGLE_PREVIEW_MODE', props)
    },

    setStartDragOptions({commit}, props){
      commit('SET_START_DRAG_OPTIONS', props)
    },

    deleteStartDragOptions({commit}, props){
      commit('DELETE_START_DRAG_OPTIONS', props)
    }

	}

});