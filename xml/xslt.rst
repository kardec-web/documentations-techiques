Assigner une variables suivant une condition
:::::::::::::::::::::::::::::::::::::::::::: 
::
    <xsl:variable name="clr" >
      <xsl:choose>
        <xsl:when test="position() mod 2 = 1">red</xsl:when>
        <xsl:otherwise>blue</xsl:otherwise>
      </xsl:choose>
    </xsl:variable> 
    <tr bgcolor="{$clr}">
    </tr>

Supprimer les retours à la ligne
::::::::::::::::::::::::::::::::
::
    normalize-space(note)
