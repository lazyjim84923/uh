/* lunr.zh.js - 中文搜尋核心邏輯 */
!function(){window.lunr&&(window.lunr.zh=function(e){var r=new window.lunr.tokenizer.separator;window.lunr.tokenizer.separator=/[\s\-\p{P}]+|(?=[\u4e00-\u9fa5])/u,e.pipeline.add(window.lunr.trimmer),e.searchPipeline.add(window.lunr.trimmer)},e.pipeline.registerFunction(window.lunr.zh,"zh"))}();
