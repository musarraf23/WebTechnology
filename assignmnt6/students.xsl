<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Student Details</h2>
                <table border="1" cellpadding="10">
                    <tr bgcolor="#9acd32">
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>University</th>
                    </tr>
                    <xsl:for-each select="students/student">
                        <tr>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="rollno"/></td>
                            <td><xsl:value-of select="department"/></td>
                            <td><xsl:value-of select="year"/></td>
                            <td><xsl:value-of select="university"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
