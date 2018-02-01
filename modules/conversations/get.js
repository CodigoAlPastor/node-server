/** 
 * @module Route/Conversation 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Conversation Route Get
 */
const getConversations = (request, response, next) => {
    response.send(200, { status: 'success' });
}

module.exports = getConversations;