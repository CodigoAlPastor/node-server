/** 
 * @module Route/Conversation 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Conversation Route Post
 */
const createConversation = (request, response, next) => {
    response.send(200, { status: 'success' });
}

module.exports = createConversation;